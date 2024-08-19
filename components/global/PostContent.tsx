"use client"
import React from "react";
import Image from "next/image";
import { IDiary } from "@/utils/supabase";
import Link from "next/link";
import { DeleteDiaryAction} from "@/actions/DiaryAction";
import { useUser } from "@clerk/clerk-react";
import EditDiaryForm from "../auth/EditDiaryForm";

const PostContent = ({
  diary_id,
  avatar,
  content,
  username,
  email,
}: IDiary): React.ReactElement => {

  const { isSignedIn } = useUser()
  
  return (
    <div
      className="card card-body card-bordered shadow-lg bg-base-300 cursor-pointer duration-300 ease-in-out hover:shadow-xl hover:bg-secondary hover:scale-105 h-72"
    >
      <div className="flex items-center gap-4">
        <Image
          src={avatar as string}
          alt={avatar as string}
          width={50}
          height={50}
          className="rounded-full bg-primary object-fit"
        />
        <p className="font-semibold text-lg">{username || email}</p>
      </div>
      <Link href={`/diary/${diary_id}`} className="overflow-y-auto text-md my-2">
      <p>{content}</p>
      </Link>
      { isSignedIn  ?
        <div className="flex gap-3">
        <button className="btn btn-warning py-2 px-2 rounded-lg" onClick={(e) =>{DeleteDiaryAction(diary_id);e.preventDefault();}} type="button">
          hapus
        </button>
        <EditDiaryForm diary_id={diary_id} content={content}/>
        </div>
      : "" }
    </div>
  );
};

export default PostContent;
