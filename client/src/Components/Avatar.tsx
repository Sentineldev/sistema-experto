interface AvatarProps {
    isSpeaking: boolean; 
}

function Avatar({ isSpeaking }: AvatarProps) {
    return (
        <div className="avatar mt-4">
            <div className={` w-44 rounded-full ring ring-offset-2 
            ${isSpeaking ? "ring-offset-green-500" : "ring-offset-black"}`}
            >
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
            </div>
        </div>
    );
}

export default Avatar;
