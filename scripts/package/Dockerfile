FROM public.ecr.aws/lambda/nodejs:14
WORKDIR /work

RUN yum install -y zip \
  && rm -rf /var/cache/yum* \
  && yum clean all \
  && npm install -g yarn

COPY package.json yarn.lock ./
RUN mkdir package \
  && yarn install \
  && yarn install --production --modules-folder package/node_modules

COPY ./ ./
RUN yarn build --outDir package \
  && cd package \
  && zip -r ../package.zip *
