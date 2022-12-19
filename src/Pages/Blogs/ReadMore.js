import React from "react";
import { Modal } from "flowbite-react";
import CustomButton from '../../Components/CustomButton';

const ReadMore = ({ show, setShow, blogDetails }) => {
  return (
    <Modal
      show={show}
      onClose={() => setShow(false)}
      className="md:pt-[480px]"
    >
      <Modal.Header className="bg-slate-600 text-slate-200">
        <span className="text-blue-200">BlogHub</span>
      </Modal.Header>
      <Modal.Body className="bg-slate-600 text-slate-200">
        <div className="space-y-6 leading-relaxed">
          {blogDetails.map((detail) => (
            <>{detail}</>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer
        onClick={() => {
          setShow(false);
        }}
        className="bg-slate-600 text-slate-200"
      >
        <CustomButton>Close</CustomButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ReadMore;
