
let interviewList = []
let rejectedList = []
let currentStatus = ''


let total = document.getElementById('total')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')
const availableJobsCount = document.getElementById('availableJobsCount')

function calculateCount() {
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
    availableJobsCount.innerText = allCardSection.children.length

}
calculateCount()

function toggleStyle(id) {
    // adding gray bg for all
    allFilterBtn.classList.add('bg-blue-600', 'text-white')
    interviewFilterBtn.classList.add('bg-blue-600', 'text-white')
    rejectedFilterBtn.classList.add('bg-blue-600', 'text-white')

    // if any button has black then remove
    allFilterBtn.classList.remove('bg-blue-600', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-600', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white')

    // console.log(id);
    const selected = document.getElementById(id)

    //this is the button that clicked for filter
    currentStatus = id
    console.log(currentStatus);

    // set bg 

    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-blue-600', 'text-white')


    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        document.getElementById('emptyCardCont').classList.add('hidden')
        renderInterview()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
        const filterCount = document.getElementById('filterCount')
        const of = document.getElementById('of')
        filterCount.classList.add('hidden')
        of.classList.add('hidden')
        document.getElementById('emptyCardCont').classList.add('hidden')
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
        document.getElementById('emptyCardCont').classList.add('hidden')
    }

}

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        console.log(parentNode);

        const companyName = parentNode.querySelector('.companyName').innerText
        const jobName = parentNode.querySelector('.jobName').innerText
        const jobType = parentNode.querySelector('.jobType').innerText
        let status = parentNode.querySelector('.status-btn')
        const experience = parentNode.querySelector('.experience').innerText
        status = "Interview"
        // status.innerText = "Interview"
        parentNode.querySelector('.status-btn').classList.remove('bg-blue-200')
        parentNode.querySelector('.status-btn').classList.add('text-green-500', 'border-2', 'btn', 'btn-soft', 'border-green-500')

        //   `
        //      <button class=" text-green-500 btn btn-soft border-2 border-green-500 
        //      w-[150px]">interview</button>

        //     `

        const cardInfo = {
            companyName,
            jobName,
            jobType,
            status,
            experience,

        }

        const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!jobExist) {
            interviewList.push(cardInfo)
        }

        // step 2 finish
        // removing the plant from struggling list
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

        // after remove rerender the html
        if (currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }

        calculateCount()


    } else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText
        const jobName = parentNode.querySelector('.jobName').innerText
        const jobType = parentNode.querySelector('.jobType').innerText
        let status = parentNode.querySelector('.status-btn')
        const experience = parentNode.querySelector('.experience').innerText
        status = "Rejected"
        parentNode.querySelector('.status-btn').classList.remove('bg-blue-200')
        parentNode.querySelector('.status-btn').classList.add('text-red-500', 'border-2', 'btn', 'btn-soft', 'border-red-500')
        //    `
        //     <button class="rejected-btn w-[150px] text-red-500 border-2 btn btn-soft border-red-500">Rejected</button>
        //     `

        const cardInfo = {
            companyName,
            jobName,
            jobType,
            status,
            // rejectedStatus,
            experience,

        }

        const jobExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

        if (!jobExist) {
            rejectedList.push(cardInfo)

        }

        // removing the job from struggling list
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        // after remove rerender the html
        if (currentStatus == "interview-filter-btn") {
            renderInterview();
        }
        calculateCount()
    } else if (event.target.closest('.delete-icon')) {

        const card = event.target.closest('.card')

        const companyName = card.querySelector('.companyName').innerText


        card.remove()


        interviewList = interviewList.filter(item =>
            item.companyName !== companyName
        )


        rejectedList = rejectedList.filter(item =>
            item.companyName !== companyName
        )

        calculateCount()

        if (currentStatus === 'interview-filter-btn') {
            renderInterview()
        }
        else if (currentStatus === 'rejected-filter-btn') {
            renderRejected()
        }
    }
    //  else if (event.target.closest('.delete-icon')) {
    //     const parentNode = event.target.parentNode.parentNode.parentNode.parentNode;
    //     // console.log(parentNode);
    //     parentNode.remove()
    //     // filter section count remove if the current status is interview or rejected 
    //     const filterCount = document.getElementById('filterCount')
    //     const of = document.getElementById('of')
    //     filterCount.innerText = rejectedList.length
    //     of.classList.remove('hidden')
    //     filterCount.classList.remove('hidden')
    //       calculateCount()
    // }else if (event.target.closest('.delete-icon')) {
    //     const parentNode = event.target.parentNode.parentNode.parentNode.parentNode;
    //     // console.log(parentNode);
    //     parentNode.remove()
    //     // filter section count remove if the current status is interview or rejected 
    //     const filterCount = document.getElementById('filterCount')
    //     const of = document.getElementById('of')
    //     filterCount.innerText = interviewList.length
    //     // filterCount.innerText = interviewList.length
    //     of.classList.remove('hidden')
    //     filterCount.classList.remove('hidden')
    //       calculateCount()
    // }


})

// rendering 
function renderInterview() {
    filterSection.innerHTML = ''
    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card bg-[#F1F2F4] p-7 rounded-md mb-6 space-y-6'
        div.innerHTML = `
          <div class="flex justify-between">
                    <div class="para">
                        <h3 class="companyName text-[20px] font-bold">${interview.companyName}</h3>
                        <p class="jobName text-[20px] text-gray-500">${interview.jobName}</p>
                    </div>
                    <div class="delete-icon  cursor-pointer">
                        <span class="border-2 p-2 rounded-[50%]"><i class="fa-regular fa-trash-can "></i></span>
                    </div>
                </div>
                <p class="jobType text-[18px] text-gray-500">${interview.jobType}</p>
                <button class="status-btn text-green-500 btn btn-soft border-2 border-green-500 max-w-[150px]">${interview.status}</button>
                <p class="experience">${interview.experience}</p>
                <div class="">
                    <button class="interview-btn text-green-500 btn btn-soft border-2 border-green-500">interview</button>
                    <button class="rejected-btn text-red-500 border-2 btn btn-soft border-red-500">Rejected</button>
                </div>
        `
        filterSection.appendChild(div)
    }
    const filterCount = document.getElementById('filterCount')
    const of = document.getElementById('of')
    filterCount.innerText = interviewList.length
    of.classList.remove('hidden')
    filterCount.classList.remove('hidden')

    // delete item 
    if (interviewList.length === 0) {
        document.getElementById('emptyCardCont').classList.remove('hidden')
    } 
    else {
        document.getElementById('emptyCardCont').classList.add('hidden')
    }

}

function renderRejected() {
    filterSection.innerHTML = ''
    for (let rejected of rejectedList) {
        console.log(rejected);

        let div = document.createElement('div');
        div.className = 'card bg-[#F1F2F4] p-7 rounded-md mb-6 space-y-6'
        div.innerHTML = `
          <div class="flex justify-between">
                    <div class="para">
                        <h3 class="companyName text-[20px] font-bold">${rejected.companyName}</h3>
                        <p class="jobName text-[20px] text-gray-500">${rejected.jobName}</p>
                    </div>
                    <div class="delete-icon  cursor-pointer">
                        <span class="border-2 p-2 rounded-[50%]"><i class="fa-regular fa-trash-can "></i></span>
                    </div>
                </div>
                <p class="jobType text-[18px] text-gray-500">${rejected.jobType}</p>
                <button  class="status-btn text-red-500 border-2 btn btn-soft border-red-500 max-w-[150px]">${rejected.status}</button>
                <p class="experience">${rejected.experience}</p>
                <div class="">
                    <button  class="interview-btn text-green-500 btn btn-soft border-2 border-green-500">interview</button>
                    <button class="rejected-btn text-red-500 border-2 btn btn-soft border-red-500">Rejected</button>
                </div>
        `
        filterSection.appendChild(div)

    }
    const filterCount = document.getElementById('filterCount')
    const of = document.getElementById('of')
    filterCount.innerText = rejectedList.length
    of.classList.remove('hidden')
    filterCount.classList.remove('hidden')


    if (rejectedList.length === 0) {
        document.getElementById('emptyCardCont').classList.remove('hidden')
    } 
    else {
        document.getElementById('emptyCardCont').classList.add('hidden')
    }
}