<template>
  <div>
    <p>
      文档：<a hover-decoration-underline c-blue href="https://uno.antfu.me/" target="_blank">https://uno.antfu.me/</a>
    </p>
    <p>
      playground：
      <a c-blue hover-decoration-underline href="https://unocss.antfu.me/play/" target="_blank">
        https://unocss.antfu.me/play/
      </a>
    </p>

    <div flex mt-20>
      <div flex p-20 rounded-15 bg="#fff" dark:bg-dark>
        <div text-20 font-600>
          Flex布局
        </div>
        <div flex w-360 flex-wrap justify-around ml-15 p-10>
          <div w-50 h-50 b-1 rounded-5 f-c-c p-10 m-20>
            <span w-6 h-6 rounded-3 bg-black dark:bg-white />
          </div>
          <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
            <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            <span w-6 h-6 rounded-3 bg-black dark:bg-white self-end />
          </div>
          <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
            <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            <span w-6 h-6 rounded-3 bg-black dark:bg-white self-center />
            <span w-6 h-6 rounded-3 bg-black dark:bg-white self-end />
          </div>
          <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
            <div flex-col justify-between>
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            </div>
            <div flex-col justify-between>
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            </div>
          </div>
          <div w-50 h-50 b-1 rounded-5 flex-col justify-between items-center p-10 m-20>
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            </div>
            <div w-6 h-6 rounded-3 bg-black dark:bg-white />
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            </div>
          </div>
          <div w-50 h-50 b-1 rounded-5 flex-col justify-between p-10 m-20>
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            </div>
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            </div>
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
              <span w-6 h-6 rounded-3 bg-black dark:bg-white />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
