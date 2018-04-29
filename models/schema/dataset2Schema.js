var mongoose=require("mongoose");
var dataset2Schema= new mongoose.Schema(
    {
           Community_Area_Number : Number,
           COMMUNITY_AREA_NAME: String,
           PERCENT_OF_HOUSING_CROWDED: Number,
           PERCENT_HOUSEHOLDS_BELOW_POVERTY: Number,
           PERCENT_AGED_16_UNEMPLOYED: Number,
           PERCENT_AGED_25_WITHOUT_HIGH_SCHOOL_DIPLOMA: Number,
           PERCENT_AGED_UNDER_18_OR_OVER_64: Number,
           PER_CAPITA_INCOME: Number,
           HARDSHIP_INDEX: Number
});

module.exports=mongoose.model("dataset2",dataset2Schema);