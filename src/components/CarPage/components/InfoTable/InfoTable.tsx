import React from 'react';

import * as S from './InfoTable.styles';

import { InfoTablePropTypes } from './InfoTable.types';

export default function InfoTable({ car }: InfoTablePropTypes) {
    return (
        <S.MainContainer>
            <table>
                <tbody>
                    <tr>
                        <th>Make:</th>
                        <td>{car.make}</td>
                    </tr>
                    <tr>
                        <th>Model:</th>
                        <td>{car.model}</td>
                    </tr>
                    <tr>
                        <th>Engine Size:</th>
                        <td>{car.engineSize}</td>
                    </tr>
                    <tr>
                        <th>Year:</th>
                        <td>{car.year}</td>
                    </tr>
                    <tr>
                        <th>Mileage:</th>
                        <td>{car.mileage}</td>
                    </tr>
                    <tr>
                        <th>Auction date/time:</th>
                        <td>{car.auctionDateTime}</td>
                    </tr>
                    <tr>
                        <th>Colour:</th>
                        <td>{car.details.specification.colour}</td>
                    </tr>
                    <tr>
                        <th>Transmission:</th>
                        <td>{car.details.specification.transmission}</td>
                    </tr>
                    <tr>
                        <th>Number of doors:</th>
                        <td>{car.details.specification.numberOfDoors}</td>
                    </tr>
                    <tr>
                        <th>CO2 emissions:</th>
                        <td>{car.details.specification.co2Emissions}</td>
                    </tr>
                    <tr>
                        <th>NOX emissions:</th>
                        <td>{car.details.specification.noxEmissions}</td>
                    </tr>
                    <tr>
                        <th>Number of keys:</th>
                        <td>{car.details.specification.numberOfKeys}</td>
                    </tr>
                    <tr>
                        <th>Logbook:</th>
                        <td>{car.details.ownership.logBook}</td>
                    </tr>
                    <tr>
                        <th>Number of owners:</th>
                        <td>{car.details.ownership.numberOfOwners}</td>
                    </tr>
                    <tr>
                        <th>Date of registration:</th>
                        <td>{car.details.ownership.dateOfRegistration}</td>
                    </tr>
                    <tr>
                        <th>Equipment:</th>
                        <td>
                            {car.details.equipment.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </S.MainContainer>
    );
}
