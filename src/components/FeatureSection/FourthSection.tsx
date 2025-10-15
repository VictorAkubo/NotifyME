

const FourthSection = () => {
  return (
    <section className='border-t border-gallery'>
        <div className='flex justify-center items-center p-12 gap-3'>
            <h2 className='text-cod-gray font-semibold text-2xl'>Scale Your</h2>
            <span className='lineShadow text-sm pl-3 pr-3 bg-white cursor-pointer flex items-center h-10 rounded-[100px] gap-2 hover:bg-[#f2f2f2]'>
                <img src='/assets/enterprise-icon.svg'/>
                <span className=''>Enterprise</span>
            </span>
                        <h2 className='text-cod-gray font-semibold text-2xl'>Without Compromising</h2>
            <span className='lineShadow text-sm pl-3 pr-3 bg-white cursor-pointer flex items-center h-10 rounded-[100px] gap-2 hover:bg-[#f2f2f2]'>
                <img src='/assets/security-icon.svg'/>
                <span className=''>Securiry</span>
            </span>
        </div>
    </section>
  )
}

export default FourthSection
