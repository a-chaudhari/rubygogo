class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, :firstName, :lastName, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :email, uniqueness: true

  before_validation :ensure_session_token

  has_many :campaigns
  has_many :contributions
  has_many :comments

  has_attached_file :avatar_img, default_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/generic-badge.png"
  validates_attachment_content_type :avatar_img, content_type: /\Aimage\/.*\Z/
  has_attached_file :profile_img, default_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/profile_generic.png"
  validates_attachment_content_type :profile_img, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    if(user)
      return user if user.is_password?(password)
    end
    nil
  end

  def avatar_img_url
    self.avatar_img.url
  end

  def profile_img_url
    self.profile_img.url
  end

  def full_name
    self.firstName + " " + self.lastName

  end

  def reset_session_token!
    self.session_token= SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
