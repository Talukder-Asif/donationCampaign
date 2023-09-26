const getStoreDonationData = () =>{
    const startedDonation = localStorage.getItem('DonationData')
    if(startedDonation){
        return JSON.parse(startedDonation)
    }
    return [];
}

const saveDonationData = id =>{
    const storedDonationData = getStoreDonationData();
    const exist = storedDonationData.find(donateId => donateId === id);
    if(!exist){
        storedDonationData.push(id);
        localStorage.setItem('DonationData', JSON.stringify(storedDonationData))
    }
}
export{saveDonationData, getStoreDonationData}