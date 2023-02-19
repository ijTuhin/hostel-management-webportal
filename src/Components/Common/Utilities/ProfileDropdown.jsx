import React from "react";
import LogOut from "../../../Authentications/LoginForm/LogOut";

const ProfileDropdown = () => {
  return (
    <div class="dropdown relative">
      <button
        class="
          dropdown-toggle
          transition
          duration-150
          ease-in-out
          flex
          items-center
        "
        type="button"
        id="dropdownMenuButton1d"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        More
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-sm
          z-50
          float-left
          list-none
          text-left
          rounded-lg
          shadow-lg
          hidden
          bg-clip-padding
          border-none
          mt-1
        "
        aria-labelledby="dropdownMenuButton1d"
      >
        <li>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              text-gray-700
              hover:bg-green-50
              hover:text-green-600
            "
            href="#"
          >
            View Profile
          </a>
        </li>
        <li>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              text-gray-700
              hover:bg-green-50
              hover:text-green-600
            "
            href="#"
          >
            Another action
          </a>
        </li>
        <li>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              text-gray-700
              hover:bg-green-50
              hover:text-green-600
            "
            href="#"
          >
            Something
          </a>
        </li>
        <hr class="border border-solid border-t-0 border-gray-700 opacity-25" />
        <li>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              text-gray-700
              hover:bg-green-50
              hover:text-green-600
              rounded-b-lg
            "
            href="#"
          >
            <LogOut />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
