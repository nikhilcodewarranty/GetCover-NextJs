import React, { useState, useRef, useEffect } from 'react';
import open from '@/assets/images/sider/active.svg';
import close from '@/assets/images/sider/inactive.svg';
import Image from "next/image";
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <div
      className={`accordion-item text-white mb-2 rounded-[15px] cursor-pointer bg-cover bg-center bg-no-repeat p-3 transition-all duration-500 ease-in-out ${!isOpen ? 'bg-open-bg' : 'bg-close-bg'
        }`}
    >
      <div
        className="accordion-header flex justify-between text-lg font-bold font-Lufga text-[#4E4D69]"
        onClick={onClick}
      >
        <span className="self-center">{title}</span>
        <span>{!isOpen ? <Image src={close} className='w-[40px] max-w-[40px]' alt="close" /> : <Image src={open} className='w-[40px] max-w-[40px]' alt="open" />}</span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight, opacity: isOpen ? 1 : 0 }}
        className="accordion-content overflow-hidden transition-all duration-500 ease-in-out pl-5  capitalize  text-[#4E4D69]"
      >
        <div className='mt-3'>
          {content}
        </div>
      </div>
    </div>
  );
};

const CustomAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default CustomAccordion;
