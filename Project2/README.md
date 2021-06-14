# Project2

- 목적 : AI 서비스 개발
- 프로젝트 기간 : 21.4.5 ~ 21.4.27
- 참가 인원 : 4명

<br/>

<br/>

## 기획

> documents/프로젝트 기획안_4조.docx

<br/>

- 주제 : 적 탐지를 위한 이미지 분류 및 객체 인식 모델링 (좀비와 사람 분류)
  - 2 classes
  - image classification
  - object detection
- 역할 
  - 공    통 : 데이터 수집 및 전처리
  - 오경진 : 객체 인식 모델링 (YOLO)
  - 이해동 : 객체 인식 모델링 (YOLO)
  - 박건우 : 이미지 분류 모델링 (전이학습)
  - 엄정민 : 이미지 분류 모델링 (CNN)

<br/>

<br/>

## Data

> 워킹 데드(The Walking Dead), Season7, Season9
>
> documents/포트폴리오_4조.pptx

<br/>

* Train Data
  * Season7, Ep4~16
  * Season9, Ep1~9
* Validation Data
  * Season7, Ep1~3
  * Season9, Ep10~12, 14~16
* Test Data
  * Google Image (Crop하지 않은 고화질 이미지)

<br/>

<br/>

## Image Classificaion Modeling

> documents/포트폴리오_4조.pptx

<br/>

* CNN
* Transfer Learning
  * VGG16
  * VGG19
  * ResNet50
  * InceptionV3
  * Xception
* Fine Tuning
  * VGG19
  * InceptionV3
  * Xception

<br/>

<br/>

## Result

> Image Classification Model Score
>
> Top 5 F1-Score

<br/>

* Crop Image

  |       Model       |  Loss   | Accuracy | Recall  | Precision | F1-Score |
  | :---------------: | :-----: | :------: | :-----: | :-------: | :------: |
  | [Fine]InceptionV3 | 0.09603 | 0.97368  | 0.93855 |  0.98824  | 0.96275  |
  |  [Fine]Xception   | 0.07931 | 0.96356  | 0.89944 |     1     | 0.94706  |
  |    InceptionV3    | 0.14588 | 0.95344  | 0.88827 |  0.98148  | 0.93255  |
  |        CNN        | 0.1576  |  0.9413  | 0.90503 |  0.93103  | 0.91785  |
  |     Xception      | 0.12552 | 0.93927  | 0.83799 |  0.99338  | 0.90909  |

<br/>

* Capture Image

  |       Model       |  Loss   | Accuracy | Recall  | Precision | F1-Score |
  | :---------------: | :-----: | :------: | :-----: | :-------: | :------: |
  |  [Fine]Xception   | 0.16833 |  0.9381  | 0.8836  |  0.87895  | 0.88127  |
  |     Xception      | 0.21252 |  0.9271  | 0.85714 |  0.8617   | 0.85942  |
  | [Fine]InceptionV3 | 0.28602 | 0.90096  | 0.85185 |  0.78537  | 0.81726  |
  |    InceptionV3    | 0.27522 | 0.90371  | 0.80952 |  0.81818  | 0.81383  |
  |       VGG16       | 0.39909 | 0.85557  | 0.63492 |  0.76923  | 0.69565  |

<br/>

