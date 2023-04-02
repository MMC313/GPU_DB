const input = document.querySelector('.searchbar_input')
const searchBtn = document.querySelector('.searchbar_btn')
const stats = document.querySelector('.stats')
const gpuName = document.querySelector('.imgs_title')
const gpuFront = document.querySelector('.imgs_gpu')
const gpuBack = document.querySelector('.imgs_back')
const gpuFrontPcb = document.querySelector('.imgs_frontpcb')
const gpuBackPcb = document.querySelector('.imgs_backpcb')
const gpuTop = document.querySelector('.imgs_top')
const gpuBottom = document.querySelector('.imgs_bottom')
const gpuRear = document.querySelector('.imgs_rear')
const gpuIo = document.querySelector('.imgs_io')
const processorIcon = document.querySelector('.processor_val')
const coreIcon = document.querySelector('.cores_val')
const tmuIcon = document.querySelector('.tmus_val')
const ropIcon = document.querySelector('.rops_val')
const memorySizeIcon = document.querySelector('.memory_size_val')
const memoryTypeIcon = document.querySelector('.memory_type_val')
const busWidthIcon = document.querySelector('.bus_width_val')
const statsName = document.querySelector('.stats_name')
const statsVariant = document.querySelector('.stats_variant')
const statsArch = document.querySelector('.stats_architecture')
const statsFoundry = document.querySelector('.stats_foundry')
const statsProcessSize = document.querySelector('.stats_processSize')
const statsTransistors = document.querySelector('.stats_transistors')
const statsDie = document.querySelector('.stats_dieSize')
const statsChipPack = document.querySelector('.stats_chipPackage')
const statsRelease = document.querySelector('.stats_release')
const statsGen = document.querySelector('.stats_generation')
const statsPre = document.querySelector('.stats_pre')
const statsSuc = document.querySelector('.stats_suc')
const statsProd = document.querySelector('.stats_prod')
const statsPrice = document.querySelector('.stats_price')
const statsBus = document.querySelector('.stats_bus')
const statsBase = document.querySelector('.stats_base')
const statsBoost = document.querySelector('.stats_boost')
const statsMemClock = document.querySelector('.stats_memClock')
const statsMemSize = document.querySelector('.stats_memorySize')
const statsMemType = document.querySelector('.stats_memoryType')
const statsMemBus = document.querySelector('.stats_memoryBus')
const statsBandwidth = document.querySelector('.stats_bandwidth')
const statsShading= document.querySelector('.stats_shadingUnits')
const statsTmus = document.querySelector('.stats_tmus')
const statsRops = document.querySelector('.stats_rops')
const statsL1 = document.querySelector('.stats_l1Cache')
const statsL2 = document.querySelector('.stats_l2Cache')
const statsPixel = document.querySelector('.stats_pixelRate')
const statsTexture = document.querySelector('.stats_textureRate')
const statsFp16 = document.querySelector('.stats_fp16')
const statsFp32 = document.querySelector('.stats_fp32')
const statsFp64 = document.querySelector('.stats_fp64')
const statsDirect = document.querySelector('.stats_directx')
const statsOpengl = document.querySelector('.stats_opengl')
const statsOpencl = document.querySelector('.stats_opencl')
const statsVulkan = document.querySelector('.stats_vulkan')
const statsSlot = document.querySelector('.stats_slotWidth')
const statsLength= document.querySelector('.stats_length')
const statsWidth = document.querySelector('.stats_width')
const statsHeight = document.querySelector('.stats_height')
const statsTdp = document.querySelector('.stats_tdp')
const statsPsu = document.querySelector('.stats_suggestedPsu')
const statsOutputs = document.querySelector('.stats_outputs')
const statsConnectors = document.querySelector('.stats_powerConnectors')
const statsBoard = document.querySelector('.stats_boardNumber')


const baseUrl = "neographics.up.railway.app/results?"
const options= {
    method: 'GET'
}

searchBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    loadImages()
    loadStatIcons()
    loadStats()
    input.value = ""  
})

async function loadInfo(searchInput){  
    let res = await fetch(baseUrl + new URLSearchParams({search:searchInput}),options)
    let data = await res.json()

    console.log(data.documents[0])
    return data.documents[0]
}

async function loadImages(){
    
    let apiData = await loadInfo(input.value)
    let gpuID = apiData.url.split(".c")

    gpuName.innerHTML = apiData.gpu_name
    loadTitleColor()

    gpuFront.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-front.jpg`
    gpuBack.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-back.jpg`
    gpuFrontPcb.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-front.jpg`
    gpuBackPcb.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-back.jpg`
    gpuTop.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-top.jpg`
    gpuBottom.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-bottom.jpg`
    gpuRear.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-rear.jpg`
    gpuIo.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-i-o.jpg`
}

async function loadStatIcons(){
    let apiData = await loadInfo(input.value)

   processorIcon.innerHTML = apiData.graphics_processor.gpu_name
   coreIcon.innerHTML = apiData.render_config.shading_units
   tmuIcon.innerHTML = apiData.render_config.tmus
   ropIcon.innerHTML = apiData.render_config.rops
   memorySizeIcon.innerHTML = apiData.memory.memory_size
   memoryTypeIcon.innerHTML = apiData.memory.memory_type
   busWidthIcon.innerHTML = apiData.memory.memory_bus
   
}

async function loadStats(){
    let apiData = await loadInfo(input.value)

    statsName.innerHTML = "<b>GPU Name: </b>"+ apiData.graphics_processor.gpu_name
    statsVariant.innerHTML = "<b>GPU Variant:</b>"+ apiData.graphics_processor.gpu_variant
    statsArch.innerHTML = "<b>Architecture:</b>"+ apiData.graphics_processor.architecture
    statsFoundry.innerHTML = "<b>Foundry:</b>"+ apiData.graphics_processor.foundry
    statsProcessSize.innerHTML = "<b>Process Size:</b>"+ apiData.graphics_processor.process_size
    statsTransistors.innerHTML = "<b>Transistors:</b>"+ apiData.graphics_processor.transistors
    statsDie.innerHTML = "<b>Die Size:</b>"+ apiData.graphics_processor.die_size
    statsRelease.innerHTML = "<b>Release Date:</b>"+ apiData.graphics_card.release_date
    statsGen.innerHTML = "<b>Generation:</b>"+ apiData.graphics_card.generation
    statsPre.innerHTML = "<b>Predecessor:</b>"+ apiData.graphics_card.predecessor
    statsSuc.innerHTML = "<b>Successor:</b>"+ apiData.graphics_card.successor
    statsProd.innerHTML = "<b>Production:</b>"+ apiData.graphics_card.production
    statsPrice.innerHTML = "<b>Launch Price:</b>"+ apiData.graphics_card.launch_price
    statsBus.innerHTML = "<b>Bus Interface:</b>"+ apiData.graphics_card.bus_interface
    statsBase.innerHTML = "<b>Base Clock:</b>"+ apiData.clock_speeds.base_clock
    statsBoost.innerHTML = "<b>Boost Clock:</b>"+ apiData.clock_speeds.boost_clock
    statsMemClock.innerHTML = "<b>Memory Clock:</b>"+ apiData.clock_speeds.memory_clock
    statsMemSize.innerHTML = "<b>Memory Size:</b>"+ apiData.memory.memory_size
    statsMemType.innerHTML = "<b>Memory Type:</b>"+ apiData.memory.memory_type
    statsMemBus.innerHTML = "<b>Memory Bus:</b>"+ apiData.memory.memory_bus
    statsBandwidth.innerHTML = "<b>Bandwidth:</b>"+ apiData.memory.bandwidth
    statsShading.innerHTML = "<b>Shading Units:</b>"+ apiData.render_config.shading_units
    statsTmus.innerHTML = "<b>TMUs:</b>"+ apiData.render_config.tmus
    statsRops.innerHTML = "<b>ROPs:</b>"+ apiData.render_config.rops
    statsL1.innerHTML = "<b>L1 Cache:</b>"+ apiData.render_config.l1_cache
    statsL2.innerHTML = "<b>L2 Cache:</b>"+ apiData.render_config.l2_cache
    statsPixel.innerHTML = "<b>Pixel Rate:</b>"+ apiData.theoretical_performance.pixel_rate
    statsTexture.innerHTML = "<b>Texture Rate:</b>"+ apiData.theoretical_performance.texture_rate
    statsFp16.innerHTML = "<b>FP16:</b>"+ apiData.theoretical_performance['fp16_(half)_performance']
    statsFp32.innerHTML = "<b>FP32:</b>"+ apiData.theoretical_performance['fp32_(float)_performance']
    statsFp64.innerHTML = "<b>FP64:</b>"+ apiData.theoretical_performance['fp64_(double)_performance']
    statsDirect.innerHTML = "<b>DirectX:</b>"+ apiData.graphics_features.directx
    statsOpengl.innerHTML = "<b>OpenGL:</b>"+ apiData.graphics_features.opengl
    statsOpencl.innerHTML = "<b>OpenCL:</b>"+ apiData.graphics_features.opencl
    statsVulkan.innerHTML = "<b>Vulkan:</b>"+ apiData.graphics_features.vulkan
    statsSlot.innerHTML = "<b>Slot Width:</b>"+ apiData.board_design.slot_width
    statsLength.innerHTML = "<b>Length:</b>"+ apiData.board_design.length
    statsWidth.innerHTML = "<b>Width:</b>"+ apiData.board_design.width 
    statsHeight.innerHTML = "<b>Height:</b>"+ apiData.board_design.height
    statsTdp.innerHTML = "<b>TDP:</b>"+ apiData.board_design.tdp
    statsPsu.innerHTML = "<b>Suggested PSU:</b>"+ apiData.board_design.suggested_psu
    statsOutputs.innerHTML = "<b>Outputs:</b>"+ apiData.board_design.outputs
    statsConnectors.innerHTML = "<b>Power Connectors:</b>"+ apiData.board_design.power_connectors
    statsBoard.innerHTML = "<b>Board Number:</b>"+ apiData.board_design.board_number


}

async function loadInitialImages(){

    let apiData = await loadInfo("AMD Radeon RX 6900 XT")
    let gpuID = apiData.url.split(".c")

    gpuName.innerHTML = apiData.gpu_name
    loadTitleColor()

    gpuFront.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-front.jpg`
    gpuBack.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-back.jpg`
    gpuFrontPcb.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-front.jpg`
    gpuBackPcb.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-back.jpg`
    gpuTop.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-top.jpg`
    gpuBottom.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-bottom.jpg`
    gpuRear.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-rear.jpg`
    gpuIo.src = `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-i-o.jpg`
}

async function loadInitialStatIcons(){
    let apiData = await loadInfo("AMD Radeon RX 6900 XT")

    processorIcon.innerHTML = apiData.graphics_processor.gpu_name
    coreIcon.innerHTML = apiData.render_config.shading_units
    tmuIcon.innerHTML = apiData.render_config.tmus
    ropIcon.innerHTML = apiData.render_config.rops
    memorySizeIcon.innerHTML = apiData.memory.memory_size
    memoryTypeIcon.innerHTML = apiData.memory.memory_type
    busWidthIcon.innerHTML = apiData.memory.memory_bus
    
}

async function loadInitialStats(){
    let apiData = await loadInfo("AMD Radeon RX 6900 XT")

    statsName.innerHTML = "<b>GPU Name: </b>"+ apiData.graphics_processor.gpu_name
    statsVariant.innerHTML = "<b>GPU Variant:</b>"+ apiData.graphics_processor.gpu_variant
    statsArch.innerHTML = "<b>Architecture:</b>"+ apiData.graphics_processor.architecture
    statsFoundry.innerHTML = "<b>Foundry:</b>"+ apiData.graphics_processor.foundry
    statsProcessSize.innerHTML = "<b>Process Size:</b>"+ apiData.graphics_processor.process_size
    statsTransistors.innerHTML = "<b>Transistors:</b>"+ apiData.graphics_processor.transistors
    statsDie.innerHTML = "<b>Die Size:</b>"+ apiData.graphics_processor.die_size
    statsRelease.innerHTML = "<b>Release Date:</b>"+ apiData.graphics_card.release_date
    statsGen.innerHTML = "<b>Generation:</b>"+ apiData.graphics_card.generation
    statsPre.innerHTML = "<b>Predecessor:</b>"+ apiData.graphics_card.predecessor
    statsSuc.innerHTML = "<b>Successor:</b>"+ apiData.graphics_card.successor
    statsProd.innerHTML = "<b>Production:</b>"+ apiData.graphics_card.production
    statsPrice.innerHTML = "<b>Launch Price:</b>"+ apiData.graphics_card.launch_price
    statsBus.innerHTML = "<b>Bus Interface:</b>"+ apiData.graphics_card.bus_interface
    statsBase.innerHTML = "<b>Base Clock:</b>"+ apiData.clock_speeds.base_clock
    statsBoost.innerHTML = "<b>Boost Clock:</b>"+ apiData.clock_speeds.boost_clock
    statsMemClock.innerHTML = "<b>Memory Clock:</b>"+ apiData.clock_speeds.memory_clock
    statsMemSize.innerHTML = "<b>Memory Size:</b>"+ apiData.memory.memory_size
    statsMemType.innerHTML = "<b>Memory Type:</b>"+ apiData.memory.memory_type
    statsMemBus.innerHTML = "<b>Memory Bus:</b>"+ apiData.memory.memory_bus
    statsBandwidth.innerHTML = "<b>Bandwidth:</b>"+ apiData.memory.bandwidth
    statsShading.innerHTML = "<b>Shading Units:</b>"+ apiData.render_config.shading_units
    statsTmus.innerHTML = "<b>TMUs:</b>"+ apiData.render_config.tmus
    statsRops.innerHTML = "<b>ROPs:</b>"+ apiData.render_config.rops
    statsL1.innerHTML = "<b>L1 Cache:</b>"+ apiData.render_config.l1_cache
    statsL2.innerHTML = "<b>L2 Cache:</b>"+ apiData.render_config.l2_cache
    statsPixel.innerHTML = "<b>Pixel Rate:</b>"+ apiData.theoretical_performance.pixel_rate
    statsTexture.innerHTML = "<b>Texture Rate:</b>"+ apiData.theoretical_performance.texture_rate
    statsFp16.innerHTML = "<b>FP16:</b>"+ apiData.theoretical_performance['fp16_(half)_performance']
    statsFp32.innerHTML = "<b>FP32:</b>"+ apiData.theoretical_performance['fp32_(float)_performance']
    statsFp64.innerHTML = "<b>FP64:</b>"+ apiData.theoretical_performance['fp64_(double)_performance']
    statsDirect.innerHTML = "<b>DirectX:</b>"+ apiData.graphics_features.directx
    statsOpengl.innerHTML = "<b>OpenGL:</b>"+ apiData.graphics_features.opengl
    statsOpencl.innerHTML = "<b>OpenCL:</b>"+ apiData.graphics_features.opencl
    statsVulkan.innerHTML = "<b>Vulkan:</b>"+ apiData.graphics_features.vulkan
    statsSlot.innerHTML = "<b>Slot Width:</b>"+ apiData.board_design.slot_width
    statsLength.innerHTML = "<b>Length:</b>"+ apiData.board_design.length
    statsWidth.innerHTML = "<b>Width:</b>"+ apiData.board_design.width 
    statsHeight.innerHTML = "<b>Height:</b>"+ apiData.board_design.height
    statsTdp.innerHTML = "<b>TDP:</b>"+ apiData.board_design.tdp
    statsPsu.innerHTML = "<b>Suggested PSU:</b>"+ apiData.board_design.suggested_psu
    statsOutputs.innerHTML = "<b>Outputs:</b>"+ apiData.board_design.outputs
    statsConnectors.innerHTML = "<b>Power Connectors:</b>"+ apiData.board_design.power_connectors
    statsBoard.innerHTML = "<b>Board Number:</b>"+ apiData.board_design.board_number


}


function loadTitleColor(){
    if(gpuName.textContent.includes("NVIDIA")){
        gpuName.style.color = "lawngreen"
        gpuName.style.outline = "1px solid lawngreen"
    }else
    if(gpuName.textContent.includes("AMD")|| gpuName.textContent.includes("ATI")){
        gpuName.style.color = "red"
        gpuName.style.outline = "1px solid red"
    }else
    if(gpuName.textContent.includes("Intel")){
        gpuName.style.color = "aqua"
        gpuName.style.outline = "1px solid aqua"
    }else{
        gpuName.style.color = "orange"
        gpuName.style.outline = "1px solid orange"
    } 
}

loadInitialImages()
loadInitialStatIcons()
loadInitialStats()
