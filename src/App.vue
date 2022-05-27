<script setup lang="ts">
import { ref } from "vue";

import StoryCard from "./components/StoryCard.vue";
import { Card } from "./types/index";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
const card = ref(null);
const save = () => {
  const el = card.value as unknown as HTMLElement;
  htmlToImage.toPng(el).then(function (dataUrl) {
    download(dataUrl, `Story ${data.value.id}.png`);
  });


};
const data = ref<Card>({
  id: 16,
  title: "Check ticket number at counter",
  AsAn: "employee at one of the check-in counters in the airport",
  IWantTo:
    "check the passenger's ticket number at the counter and process the passenger's consignment",
  SoThat:
    "I can heck in for passengers after confirmation, scan the bar code on passengers' boarding pass, convenient to count the number of passengers checked in",
  AcceptanceCriteria:
    "Passengers must show a ticket with the counter number of checked baggage, as well as the ticket number matches my service counter number. I can check the baggage for passengers if the two tickets are corrext.The system responds immediately after scanning the bar code",
  State: "Rejected",
  Reason: "because of Overdesign",
});
</script>

<template>
  <div class="w-full flex items-center justify-center bg-gray-50">
    <div
      class="w-full relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
    >
      <div
        class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      ></div>
      <div
        class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
      >
        <div class="mx-auto max-w-md">
          <div class="grid xl:grid-cols-3 xl:gap-6">
            <div class="relative z-0 w-full mb-6 group col-span-1">
              <input
                name="id"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                v-model="data.id"
              />
              <label
                for="id"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Story ID</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group col-span-2">
              <input
                name="title"
                id="title"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                v-model="data.title"
              />
              <label
                for="title"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Title</label
              >
            </div>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              id="AsAn"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              v-model="data.AsAn"
            />
            <label
              for="AsAn"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >As an</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              id="IWantTo"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              v-model="data.IWantTo"
            />
            <label
              for="IWantTo"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >I want to</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              id="SoThat"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              v-model="data.SoThat"
            />
            <label
              for="SoThat"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >So that</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              id="AcceptanceCriteria"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              v-model="data.AcceptanceCriteria"
            />
            <label
              for="AcceptanceCriteria"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >AcceptanceCriteria</label
            >
          </div>
          <div class="grid xl:grid-cols-3 xl:gap-6">
            <div class="relative z-0 w-full mb-6 group col-span-1">
              <label
                for="countries"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Select an option</label
              >
              <select
                id="State"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                v-model="data.State"
              >
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div class="relative z-0 w-full mb-6 group col-span-2">
              <input
                id="Reason"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                v-model="data.Reason"
              />
              <label
                for="Reason"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Reason</label
              >
            </div>
          </div>
          <button
            @click="save"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save as Image
          </button>
        </div>
      </div>
    </div>
    <div ref="card" class="w-full">
      <StoryCard :data="data"></StoryCard>
    </div>
  </div>
</template>

<style></style>
