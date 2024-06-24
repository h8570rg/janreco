/**
 * Use material icons.
 * @see https://fonts.google.com/icons
 */

import classNames from "classnames";

export type IconName =
  | "add"
  | "back"
  | "help"
  | "search"
  | "delete"
  | "more"
  | "dragIndicator"
  | "personAdd"
  | "menu"
  | "close"
  | "chip"
  | "check-filled"
  | "edit"
  | "description";

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg className={classNames("fill-current", className)} viewBox="0 0 44 44">
      <use xlinkHref={`#${name}`} />
    </svg>
  );
}

export function IconDefs() {
  return (
    <svg
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="add" viewBox="0 -960 960 960">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </symbol>
        <symbol id="back" viewBox="0 -960 960 960">
          <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
        </symbol>
        <symbol id="help" viewBox="0 -960 960 960">
          <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </symbol>
        <symbol id="search" viewBox="0 -960 960 960">
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </symbol>
        <symbol id="delete" viewBox="0 -960 960 960">
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </symbol>
        <symbol id="more" viewBox="0 -960 960 960">
          <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
        </symbol>
        <symbol id="dragIndicator" viewBox="0 -960 960 960">
          <path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z" />
        </symbol>
        <symbol id="personAdd" viewBox="0 -960 960 960">
          <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
        </symbol>
        <symbol id="menu" viewBox="0 -960 960 960">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </symbol>
        <symbol id="close" viewBox="0 -960 960 960">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </symbol>
        <symbol id="chip" viewBox="0 0 510 510">
          <path d="m510 255c0-140.85-114.162-255-255-255-140.85 0-255 114.162-255 255 0 140.85 114.162 255 255 255 140.85 0 255-114.162 255-255zm-479.488 15h48.13c3.167 37.553 18.106 71.801 41.107 99.038l-34.021 34.022c-31.592-36.073-51.857-82.29-55.216-133.06zm55.216-163.06 34.022 34.022c-23.002 27.237-37.941 61.485-41.108 99.038h-48.13c3.359-50.77 23.624-96.987 55.216-133.06zm393.76 133.06h-48.13c-3.167-37.553-18.106-71.801-41.107-99.038l34.022-34.022c31.591 36.073 51.856 82.29 55.215 133.06zm-224.488 162c-81.056 0-147-65.944-147-147s65.944-147 147-147 147 65.944 147 147-65.944 147-147 147zm114.038-282.25c-27.237-23.002-61.485-37.941-99.038-41.108v-48.13c50.769 3.359 96.987 23.624 133.059 55.216zm-129.038-41.108c-37.553 3.167-71.801 18.106-99.038 41.108l-34.022-34.022c36.073-31.592 82.291-51.857 133.06-55.216zm-99.038 311.608c27.237 23.001 61.485 37.941 99.038 41.107v48.13c-50.769-3.359-96.987-23.625-133.059-55.216zm129.038 41.108c37.553-3.167 71.801-18.106 99.038-41.107l34.022 34.022c-36.072 31.591-82.29 51.857-133.059 55.216v-48.131zm120.251-62.32c23.001-27.237 37.941-61.485 41.107-99.038h48.13c-3.359 50.77-23.624 96.987-55.216 133.06z" />
          <path d="m272.466 240h-34.933c-9.027 0-16.371-7.344-16.371-16.371 0-8.947 7.19-16.373 16.492-16.371l33.52.248c8.077.06 15.498 4.158 19.847 10.956l.177.277c4.461 6.981 13.737 9.023 20.717 4.562s9.023-13.736 4.562-20.717l-.181-.283c-9.352-14.619-25.258-24.649-46.296-24.804v-15.673c0-8.284-6.716-15-15-15s-15 6.716-15 15v15.451c-30.354-.223-48.837 22.378-48.837 46.354 0 25.569 20.802 46.371 46.371 46.371h34.933c9.027 0 16.371 7.344 16.371 16.371 0 8.943-7.196 16.395-16.492 16.371l-36.568-.27c-7.009-.052-13.603-3.171-18.09-8.557-5.303-6.366-14.761-7.226-21.125-1.923-6.365 5.302-7.226 14.761-1.923 21.125 10.149 12.182 25.063 19.236 40.917 19.354l4.444.033v15.673c0 8.284 6.716 15 15 15s15-6.716 15-15v-15.451c30.018.221 48.837-22.03 48.837-46.354-.001-25.57-20.802-46.372-46.372-46.372z" />
        </symbol>
        <symbol id="check-filled" viewBox="0 -960 960 960">
          <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
        </symbol>
        <symbol id="edit" viewBox="0 -960 960 960">
          <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
        </symbol>
        <symbol id="description" viewBox="0 -960 960 960">
          <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
        </symbol>
      </defs>
    </svg>
  );
}
