import React from "react";

export function ListingItem() {
  return (
    <div class="relative flex flex-col">
      <div
        class="
          group
          block
          w-full
          rounded-lg
          bg-gray-100
          focus-within:ring-2
          focus-within:ring-offset-2
          focus-within:ring-offset-gray-100
          focus-within:ring-pink-500
          overflow-hidden
          "
      >
        <img
          src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=543&amp;h=384&amp;q=80"
          alt=""
          class="
              object-cover
              pointer-events-none
              group-hover:opacity-75
              h-48
              w-full
          "
        />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for Nike Air 2021</span>
        </button>
      </div>
      <div
        class="
          flex-1 flex
          md:flex-col
          justify-between
          items-start
          md:items-stretch
          gap-3
          px-2
          "
      >
        <div class="mt-1 flex-1">
          <div class="flex justify-between items-center gap-3">
            <div>
              RM <span class="text-2xl font-bold">99</span>
            </div>
            <div class="text-sm text-gray-500">5 piece available</div>
          </div>
          <p
            class="
              block
              text-sm
              font-medium
              text-gray-900
              truncate
              pointer-events-none
              "
          >
            Nike Air 2021
          </p>
          <p
            class="
              block
              text-sm
              font-medium
              text-gray-500
              pointer-events-none
              "
          >
            So light it feels like walking in the air.
          </p>
        </div>
        <div class="flex flex-col md:flex-row gap-3 py-3">
          <button
            type="button"
            class="
              js-edit-btn
              inline-flex
              justify-center
              items-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-pink-600
              hover:bg-pink-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-pink-500
              "
          >
            <svg
              class="h-4 w-4 mr-1.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
            EDIT
          </button>
          <button
            type="button"
            class="
              js-delete-btn
              inline-flex
              justify-center
              items-center
              py-2
              px-4
              border border-pink-500
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-pink-500
              bg-white
              hover:text-pink-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-pink-500
              "
          >
            <svg
              class="w-4 h-4 mr-1.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}