# Project3

- 목적 : 융합 프로젝트 (IoT + BigData + AI + CLOUD)
- 프로젝트 기간 : 21.4.28 ~ 21.6.4
- 참가 인원 : 8명

<br/>

<br/>

## 기획

> documents/(KD1)융복합 프로젝트 기획안_7조.docx
>
> 최종발표_7조.pptx

<br/>

- 주제 : AI를 이용한 스마트 캐셔
  - 컨베이어 벨트위에 물품을 하나씩 올려 놓으면 사진을 찍어서 어떤 물품인지 분류
- AI
  - Target : 20 classes
  - Image Classification
  - Object Detection

<br/>

<br/>

## Data

> 과자 및 음료 20가지
>
> 동영상 촬영 후 프레임 단위로 캡쳐
>
> 35,806 images
>
> AI/dataset_sample

<br/>

* Train Data / Validation Data
  * 7 : 3 split
* Test Data
  * 컨베이어 벨트 위에서 찍은 사진
  * 100 images

<br/>

<br/>

## Image Classificaion Modeling

> 최종발표_7조.pptx
>
> AI/classification.ipynb
>
> AI_documents/modeling_history.xlsx

<br/>

* Xception Fine Tuning
* Image Augmentation

<br/>

<br/>

## Result

> Image Classification Model Score
>
> AI_documents/modeling_history.xlsx
>
> AI_documents/accuracy_test_data.xlsx

<br/>

* Train
  * Loss : 0.0157
  * Accuracy : 0.9961
* Validation
  * Loss : 0.0265
  * Accuracy : **0.9912**
* Test
  * Loss : 
  * Accuracy : 0.96

<br/>

<br/>

## 느낀 점

* 생각보다 성능이 잘 나왔다.
* 데이터 수집에 시간이 오래걸렸다.
* gpu 사용 때문에 서버를 복잡하게 설계해서 통신에 어려움이 많았다.
* 실제 테스트에서 카메라 각도, 조명, 배경의 노이즈 등으로 성능이 매우 떨어져서, 이런 설정을 항상 최고로 유지해야 했다.
* 예산 문제로 장비(하드웨어)가 초라해서, 실제 시장에서의 퍼포먼스를 기대하기 어려웠다.
* 카메라를 여러 대 설치하여 정확도를 더 높일 수 있었다.
* 객체 인식 모델(YOLO)로 했을 때도 성능이 잘 나왔다.
