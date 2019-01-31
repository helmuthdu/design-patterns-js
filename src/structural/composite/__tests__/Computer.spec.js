import { expect } from 'chai';
import { Cabinet, VideoCard, HardDrive, Memory } from '../Computer.js';

describe('structural->composite: Computer', () => {
  it('should create a cabinet with 3 components and sum total price', () => {
    const cabinet = new Cabinet();
    cabinet.add(new VideoCard());
    cabinet.add(new HardDrive());
    cabinet.add(new Memory());

    expect(cabinet.getPrice()).to.equal(830);
  });

  it('should get the equipment name', () => {
    const videoCard = new VideoCard();

    expect(videoCard.getName()).to.equal('Video Card');
  });
});
