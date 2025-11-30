import { updateCafeRanking } from '../src/lib/ranking-service';

async function main() {
    try {
        await updateCafeRanking();
        console.log('Ranking update job completed successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Ranking update job failed:', error);
        process.exit(1);
    }
}

main();
