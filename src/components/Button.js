import  Button from "@mui/material/Button";

const CVButton = ({url, filename}) => {
  const handleClick = async() => {
    await fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <>
    <Button style={{backgroundColor:'white'}} onClick={handleClick}>Download CV</Button>
    </>
  );
};

export default CVButton;
