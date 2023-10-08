import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { leaderBoardData } from "./leaderBoard.js";

export function LB({ search }: LBProps) {
	let lbData = leaderBoardData;

	if (search.length) {
		lbData = leaderBoardData.filter((lb) => lb.name.toLowerCase().includes(search.toLowerCase()));
	}

	const rank = (data: (typeof leaderBoardData)[0]) => {
		return leaderBoardData.findIndex((lb) => lb.name === data.name) + 1;
	};

	const className = (color: string) => `text-primary font-medium text-center ${color}`;

	return (
		<Table id="leaderboard" className="w-4/5 max-md:w-[92vw]">
			<TableCaption></TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[2rem]">Rank</TableHead>
					<TableHead>Name</TableHead>
					<TableHead className="text-center">Track 1</TableHead>
					<TableHead className="text-center">Track 2</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{lbData.map((lb) => (
					<TableRow key={rank(lb)}>
						<TableCell className={className(lb.color)}>{rank(lb)}</TableCell>
						<TableCell className="text-primary">{lb.name}</TableCell>
						<TableCell className="text-primary text-center">{lb.trackOne}</TableCell>
						<TableCell className="text-primary text-center">{lb.trackTwo}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

interface LBProps {
	search: string;
}
