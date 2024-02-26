import Image from "next/image";

const Button = ({ title, onClick, img1, img2, width, height, backgroundColor }) => {

  const styles = {
    borderRadius: '2px',
    backgroundColor: '#E1683B' || backgroundColor,
    color: "#ffffff",
    fontWeight: 500,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '10px',
    width: width,
    height: height
  };

  return <button style={styles} onClick={onClick}>
    {img1 && <Image src={img1} alt="icon" />}
    {title}
    {img2 && <Image src={img2} alt="icon" />}
  </button>
}

export default Button;