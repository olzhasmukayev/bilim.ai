"use client";

import React from "react";
import Avatar from "./Avatar";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            "
        >
          <div className="md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute 
            rounded-xl 
            shadow-md
            border-[1px]
            border-neutral-200
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Вход" />
              <MenuItem onClick={() => {}} label="Регистрация" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
