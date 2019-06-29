---
title: javascript로 사진 똑바로 만들기
date: 2018-07-11 01:03:37

categories:  
  - Front-end
  - memo
tags: 
- JavaScript
---

회사에서 열심히 일을 하던 도중 이슈가 하나 생겼다. 폰으로 사진 파일을 업로드 하면 어떤 사진들은 이미지 방향이 자꾸 돌아가서 업로드 되는 것이었다.

![이렇게 이미지 뷰어나 앨범에서 보면 제대로 출력되는 사진들이](/images/frontend/javascript-memo-exif-1.png)
![이런식으로 이미지가 돌아가서 나온다](/images/frontend/javascript-memo-exif-2.png)

사실 좀 귀찮기도 하고 어떻게 고칠지 막막하기도 해서 그냥 냅두고 싶었지만 그러면 절대 안되기 때문에 우여곡절 어떻게든 방법을 찾아서 해결 했는데 그 과정을 공유해보고자 한다.

## 원인

카메라로 사진을 찍으면 메타데이터로 exif 값이 저장된다. 이 exif 는 디지털 카메라에서 이용되는 이미지 파일 포맷인데 여기에 orientation 이라고 사진의 방향 값이 저장되어 있다.

![exif orientation](/images/frontend/javascript-memo-exif-4.gif)

[exif-js](https://github.com/exif-js/exif-js) 오픈소스를 사용하면 exif 데이터를 읽어올 수 있길래 한번 써보았다.

```javascript
function getExif(file) {
  const reader = new FileReader();
  const imageViewer = document.getElementById("imageViewer");
  const image = file.files[0];

  reader.onload = e => {
    EXIF.getData(image, () => {
      const tags = EXIF.getAllTags(image);

      // metadata 출력
      console.log(tags);

      // 이미지 미리보기
      imageViewer.style.backgroundImage = `url(${e.target.result})`;
    });
  };

  reader.readAsDataURL(image);
}
```

![확인해보면 orientation값이 6으로 되어있다.](/images/frontend/javascript-memo-exif-3.png)

## 해결 방법

대표님이 세가지 솔루션을 제시해주셨다.

1.  client 단에서 업로드시 orientation 값 기준으로 수정하여 서버에 업로드
2.  server 단에서 업로드 후 rotation 처리
3.  보여줄때 그때마다 rotation 처리해 주는 방식

여기서 [JavaScript-Load-Image](https://github.com/blueimp/JavaScript-Load-Image) 오픈소스를 사용하면 첫번째 방법으로 해결이 될것 같아서 첫번째 방법으로 문제를 해결하기로 했다.

```javascript
function fixRotationOfFile(file) {
  const image = file.files[0];

  loadImage(
    image,
    img => {
      const imageViewer = document.getElementById("imageViewer");

      imageViewer.appendChild(img);
    },
    { maxWidth: 400, orientation: true }
  );
}
```

![정방향으로 출력되는 이미지](/images/frontend/javascript-memo-exif-4.png)
이렇게 하면 이미지가 정뱡향으로 출력된다!

```javascript
return new Promise((resolve, reject) => {
  const image = file.files[0];
  const fileType = image.type;

  loadImage(
    file,
    img => {
      if (img.type === "error") {
        reject(img);
      }

      //
      img.toBlob(blob => {
        const createdFile = new File([blob], image.name);

        // 이미지 업로드 실행은 여기서
      }, fileType);
    },
    { orientation: true }
  );
});
```

위의 코드와 같은 식으로 정방향으로 출력된 blob 이미지를 file 로 바꾸어 이미지를 업로드 하는 식으로 해결했다.

## 마무리

AWS S3 및 몇몇 서비스에서는 원본을 그대로 두고 이미지가 출력될 때마다 rotation 처리를 해주는 방식을 사용한 것 같던데 나중에 기회가 된다면 이미지가 출력될 때마다 rotation 처리를 해주는 방식 으로도 한번 해결해보고 싶다.
