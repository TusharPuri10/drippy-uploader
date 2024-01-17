"use client";
import { fileState } from '../recoilContextProvider'
import { useRecoilState } from 'recoil'

export default function Home() {
  const [file, setFile] = useRecoilState(fileState);
  return (
    <div>
      {file.map((file) => (
        <div key={file.name}>
          {file.name}
        </div>
      ))}
    </div>
  )
}
