function countDown(count) {
    if (count <= 0) {
        console.log('All done');
        return;
    }

    console.log('count', count);
    count--;
    countDown(count);
}

countDown(5);
