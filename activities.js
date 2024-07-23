import crypto from 'crypto';

const activity_types = ["run", "swim", "jog", "weights", "walking"];

export function generateActivities (amount) {
    let arr = [];

    for (let i = 0; i < amount; i++) {
        arr.push({
            "id": crypto.randomUUID(),
            "activity_submitted": Date.now(),
            "activity_type": activity_types[Math.floor(Math.random() * activity_types.length)],
            "activity_duration": Math.floor(Math.random() * 60)
        })
    }
    return arr;
}