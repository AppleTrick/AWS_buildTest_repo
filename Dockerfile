# 나만의 가짜 컴퓨터 만드는 설명서

# 1. 운영체제 프로그램 하나 하나 직접 설치
# FROM ubuntu:22.04

# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

#2. 이미 리눅스, node, yarn, npm 모두 깔려있는 컴퓨터
FROM node:18

# 2-2. 프로그램 세팅하는 과정
# RUN mkdir myfolder => 카피할때 자동으로 만들기때문에 굳이 필요 없음
COPY . /myfolder/
# RUN cd myfolder
WORKDIR /myfolder/
RUN yarn install
RUN yarn build

# 2-3. docker안에서 프로그램 실행
CMD yarn start