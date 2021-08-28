export class SimpleSummary {
  private _total: Number;
  private _overdue: Number;
  private _off_track: Number;
  private _at_risk: Number;
  private _on_track: Number;
  private _unknown: Number;

  constructor(
    total: Number,
    overdue: Number,
    off_track: Number,
    at_risk: Number,
    on_track: Number,
    unknown: Number
  ) {
    this._total = total;
    this._overdue = overdue;
    this._off_track = off_track;
    this._at_risk = at_risk;
    this._on_track = on_track;
    this._unknown = unknown;
  }

  public setAllValues(
    total: Number,
    overdue: Number,
    off_track: Number,
    at_risk: Number,
    on_track: Number,
    unknown: Number
  ) {
    this._total = total;
    this._overdue = overdue;
    this._off_track = off_track;
    this._at_risk = at_risk;
    this._on_track = on_track;
    this._unknown = unknown;
  }

  public get total(): Number {
    return this._total
  }

  public set total(total: Number) {
    this._total = total;
  }
  
  public get overdue(): Number {
    return this._overdue;
  }

  public set overdue(overdue: Number) {
    this._overdue = overdue;
  }

  public get off_track(): Number {
    return this._off_track;
  }

  public set off_track(off_track: Number) {
    this._off_track = off_track;
  }
  
  public get at_risk(): Number {
    return this._at_risk;
  }

  public set at_risk(at_risk: Number) {
    this._at_risk = at_risk;
  }
  
  public get on_track(): Number {
    return this._on_track;
  }

  public set on_track(on_track: Number) {
    this._on_track = on_track;
  }
  
  public get unkown(): Number {
    return this._unknown;
  }

  public set unkown(unknown: Number) {
    this._unknown = unknown;
  }

}
