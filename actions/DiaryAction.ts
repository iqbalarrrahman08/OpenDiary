"use server";
import { redirect } from "next/navigation"
import { getUserData } from "@/utils/clerk";
import { supabase, IDiary } from "@/utils/supabase";
import { Redirect } from "next";

export const CreateDiaryAction = async (formData: FormData): Promise<Redirect> => {
    const content = formData.get("content") as string;

    const { avatar, email, username } = await getUserData()

    const data: IDiary = { content, email, username, avatar }

    await supabase.from("diary").insert(data)

    redirect("/dashboard/my-diary")
};

export const DeleteDiaryAction = async (diary_id?: number): Promise<Redirect>=> {
    await supabase.from("diary").delete().eq("id", diary_id)
    console.log("berhasil di hapus!")
    redirect("/")
};

export const EditDiaryAction = async (formData: FormData): Promise<Redirect> => {
    const content = formData.get("content") as string;
    const diary_id = formData.get('diary_id')

    const { avatar, email, username } = await getUserData()

    const data: IDiary = { content, email, username, avatar }

    const newContent = data?.content

    await supabase.from('diary').update({content: newContent}).eq("id", diary_id)
    redirect("/dashboard/my-diary")

}

